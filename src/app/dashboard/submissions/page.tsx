"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, FileText } from "lucide-react";

type Submission = {
  id: string;
  tax_year: number;
  type: string;
  status: string;
  created_at: string;
};

const submissionTypes = [
  { value: "personal", label: "Personal Tax" },
  { value: "corporate", label: "Corporate Tax" },
  { value: "student", label: "International Student" },
  { value: "small_business", label: "Small Business/Self-Employed" },
];

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    tax_year: new Date().getFullYear(),
    type: "personal",
  });
  const supabase = createClient();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    const { data, error } = await supabase
      .from("tax_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load submissions");
    } else {
      setSubmissions(data || []);
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
  };

  const handleSelect = (value: string) => {
    setFormData({ ...formData, type: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from("tax_submissions").insert({
      tax_year: formData.tax_year,
      type: formData.type,
      status: "draft",
    });

    if (error) {
      toast.error("Failed to create submission: " + error.message);
    } else {
      toast.success("New tax submission created!");
      fetchSubmissions();
    }
    setSubmitting(false);
  };

  if (loading) {
    return <div className="container mx-auto py-8 px-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Tax Submissions</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Start New Submission</CardTitle>
            <CardDescription>Begin preparing your tax return</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div>
                <Label>Tax Year</Label>
                <Input
                  type="number"
                  name="tax_year"
                  value={formData.tax_year}
                  onChange={handleChange}
                  min={2000}
                  max={new Date().getFullYear()}
                  required
                />
              </div>
              <div>
                <Label>Submission Type</Label>
                <Select value={formData.type} onValueChange={handleSelect}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {submissionTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardContent>
              <Button type="submit" disabled={submitting} className="w-full">
                {submitting ? "Creating..." : "Create Submission"}
              </Button>
            </CardContent>
          </form>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Submissions</CardTitle>
            <CardDescription>Past and current tax filings</CardDescription>
          </CardHeader>
          <CardContent>
            {submissions.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No submissions yet.</p>
            ) : (
              <div className="space-y-4">
                {submissions.map((sub) => (
                  <div key={sub.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(sub.created_at).toLocaleDateString()}
                        </div>
                        <div className="font-medium">
                          {submissionTypes.find(t => t.value === sub.type)?.label || sub.type} - {sub.tax_year}
                        </div>
                        <div className="text-sm mt-1">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${
                            sub.status === "draft" ? "bg-yellow-100 text-yellow-800" :
                            sub.status === "submitted" ? "bg-blue-100 text-blue-800" :
                            sub.status === "filed" ? "bg-green-100 text-green-800" :
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {sub.status}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" disabled>
                        View Details
                      </Button>
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