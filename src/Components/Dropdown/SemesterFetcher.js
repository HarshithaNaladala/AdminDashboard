import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner/Spinner";

async function fetchSemesters() {
  const response = await fetch('https://learningtoolsdev.gsu.edu/admindashboard/api/semesters');
  if (!response.ok) {
    throw new Error('API request failed');
  }
  return response.json();
}

export default function SemesterFetcher({ setSemesterOptions }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['semesters'],
    queryFn: fetchSemesters,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (data) {
      setSemesterOptions(data);
    }
  }, [data, setSemesterOptions]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error loading semesters</div>;
  }

  return null;
}



