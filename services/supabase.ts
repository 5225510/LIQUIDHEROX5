import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://sctgxzpywhzprulkhwty.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjdGd4enB5d2h6cHJ1bGtod3R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwMjY2NTQsImV4cCI6MjA4MTYwMjY1NH0.NL8xtFL5hx393gJAGk_HgJZkzoriRxU-bcLAYXlRwDw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Replace this with your actual Gmail address to receive notifications
const ADMIN_GMAIL = "liquidherox@gmail.com"; 

export const notifyAdminViaEmail = async (details: { name: string, email: string, phone: string, position: number }) => {
  try {
    await fetch(`https://formsubmit.co/ajax/${ADMIN_GMAIL}`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        subject: `New Waitlist Signup: ${details.name || 'Anonymous'}`,
        message: `A new hero has joined the LIQUIDHEROX waitlist!`,
        name: details.name,
        email: details.email,
        phone: details.phone,
        queue_position: `#${details.position}`,
        _template: "table" // Sends a clean table-formatted email
      })
    });
  } catch (error) {
    console.error("Email notification failed:", error);
    // We don't block the user if email fails, as long as DB saved
  }
};

export const joinWaitlist = async (name: string, email: string, phone: string) => {
  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ 
      name: name.trim() || null, 
      email: email.toLowerCase().trim(), 
      phone: phone.trim() || null 
    }])
    .select('created_at')
    .single();

  if (error) return { data: null, error };

  const { count } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })
    .lte('created_at', data.created_at);

  const position = count || 1;

  // Trigger the background notification to your Gmail
  await notifyAdminViaEmail({ name, email, phone, position });

  return { data: { queuePosition: position }, error: null };
};

export const getWaitlistEntries = async () => {
  return await supabase
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: false });
};