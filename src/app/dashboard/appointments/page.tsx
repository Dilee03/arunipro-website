"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, X } from "lucide-react";
import { format } from "date-fns";

type Appointment = {
  id: string;
  office_location: string;
  appointment_date: string;
  appointment_time: string;
  status: string;
  notes: string | null;
};

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    office_location: "scarborough",
    appointment_date: "",
    appointment_time: "",
    notes: "",
  });
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("appointment_date", { ascending: true })
      .order("appointment_time", { ascending: true });

    if (error) {
      toast.error("Failed to load appointments");
    } else {
      setAppointments(data || []);
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelect = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.appointment_date || !formData.appointment_time) {
      toast.error("Please select date and time.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("appointments").insert({
      office_location: formData.office_location,
      appointment_date: formData.appointment_date,
      appointment_time: formData.appointment_time,
      notes: formData.notes || null,
    });

    if (error) {
      toast.error("Failed to book appointment: " + error.message);
    } else {
      toast.success("Appointment booked successfully!");
      setFormData({
        office_location: "scarborough",
        appointment_date: "",
        appointment_time: "",
        notes: "",
      });
      fetchAppointments();
    }
    setSubmitting(false);
  };

  const cancelAppointment = async (id: string) => {
    const { error } = await supabase
      .from("appointments")
      .update({ status: "cancelled" })
      .eq("id", id);

    if (error) {
      toast.error("Failed to cancel appointment");
    } else {
      toast.success("Appointment cancelled");
      fetchAppointments();
    }
  };

  const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), "PPP");
  };

  if (loading) {
    return <div className="container mx-auto py-8 px-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Appointments</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Book New Appointment</CardTitle>
            <CardDescription>Schedule a meeting with our tax experts</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div>
                <Label>Office Location</Label>
                <Select
                  value={formData.office_location}
                  onValueChange={(val) => handleSelect("office_location", val)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scarborough">Scarborough Office</SelectItem>
                    <SelectItem value="downtown">Downtown Eaton Centre Office</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Date</Label>
                <Input
                  type="date"
                  name="appointment_date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>Time</Label>
                <Input
                  type="time"
                  name="appointment_time"
                  value={formData.appointment_time}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>Notes (optional)</Label>
                <Input
                  name="notes"
                  placeholder="e.g., bring T4 slips"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardContent>
              <Button type="submit" disabled={submitting} className="w-full">
                {submitting ? "Booking..." : "Book Appointment"}
              </Button>
            </CardContent>
          </form>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Appointments</CardTitle>
            <CardDescription>Upcoming and past appointments</CardDescription>
          </CardHeader>
          <CardContent>
            {appointments.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No appointments yet.</p>
            ) : (
              <div className="space-y-4">
                {appointments.map((apt) => (
                  <div key={apt.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4" />
                          {formatDate(apt.appointment_date)} at {apt.appointment_time.slice(0, 5)}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4" />
                          {apt.office_location === "scarborough" ? "Scarborough Office" : "Downtown Eaton Centre Office"}
                        </div>
                        {apt.notes && (
                          <p className="text-sm text-gray-600 mt-2">Note: {apt.notes}</p>
                        )}
                      </div>
                      <div>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          apt.status === "scheduled" ? "bg-green-100 text-green-800" :
                          apt.status === "cancelled" ? "bg-red-100 text-red-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {apt.status}
                        </span>
                        {apt.status === "scheduled" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-2 text-red-500 hover:text-red-700"
                            onClick={() => cancelAppointment(apt.id)}
                          >
                            <X className="h-4 w-4 mr-1" /> Cancel
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}