export const metadata = {
    title: "Time in Amsterdam",
  };
  
  export default async function Page() {
    const res = await fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam");
    const data = (await res.json()) as { hour: number; minute: number; seconds: number };
    const stamp = data.hour + ":" + data.minute + ":" + data.seconds;
  
    return (
      <>
        <h1>Time in Amsterdam is {stamp}</h1>
      </>
    );
  }
  