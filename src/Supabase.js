import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	"https://bmdllnihjomgpgpycgkt.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtZGxsbmloam9tZ3BncHljZ2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg2MDg4NTEsImV4cCI6MTk3NDE4NDg1MX0.1uguWrNQ5puRUyPnNJdfIA5PDxjEMjqZ8gLs9E6qnm4"
);
