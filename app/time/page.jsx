  
  export default async function Page() {
    const data = await (await fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam")).json();
  
    return (
        <h1>Time in Amsterdam is {data.hour + ":" + data.minute + ":" + data.seconds}</h1>
    );
  }
  