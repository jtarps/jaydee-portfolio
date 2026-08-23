// src/app/api/capture-email/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('resume_downloads')
    .insert([{ email }]);

  if (error) {
    console.error(error);
    if (error.code === '23505') {
      return NextResponse.json({ message: "You've already downloaded this resume." }, { status: 409 });
    }
    return NextResponse.json({ message: "Internal error." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}