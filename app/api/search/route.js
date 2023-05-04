import { NextResponse } from "next/server";

export async function GET(request) {
  const url = 'https://movie-database-alternative.p.rapidapi.com/';
  const { searchParams } = request.nextUrl;
  const movie = searchParams.get("q");
  const params = {
    s: movie,
    r: 'json',
    page: '1'
  };

  const headers = {
    'X-RapidAPI-Key': '206de37f45msh212712fd5796d37p16b4a6jsn794df8ae1b62',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  };

  const response = await fetch(`${url}?${new URLSearchParams(params).toString()}`, {
    headers
  });

  const data = await response.json();
  
  return NextResponse.json({ data });
  
}


