import { useState, useEffect } from "react";

export default function FetchLogsData({currentPage}) {

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchLogs () {
      setLoading(true);
      setTimeout(async ()=>{
        try {
            setLoading(true);
            const response = await fetch('https://learningtoolsdev.gsu.edu/admindashboard/api/log?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==');
            const data = await response.json();
            setLogs(data);
        } 
        catch (error) {
            console.error('Error fetching logs:', error);
        } 
        finally {
            setLoading(false);
        }
      }, 10)
    }
   fetchLogs();
   }, [currentPage]);

  return { logs, loading };
}