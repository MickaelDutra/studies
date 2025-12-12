AOS.init();


const date = new Date("nov 19, 2026 00:00:00");
const timeStampDate = date.getTime();

const countdown = setInterval(() => {
    const now = new Date;
    const timeStampDateNow = now.getTime();

    const timeToEvent = timeStampDate - timeStampDateNow;

    const dayMs = 1000 * 60 * 60 * 24;
    const hourMS = 1000 * 60 * 60;
    const minMS = 1000 * 60;


    const dayToEvent = Math.floor(timeToEvent / dayMs);
    const hourToEvent = Math.floor((timeToEvent % dayMs) / hourMS);
    const minToEnvent = Math.floor((timeToEvent % hourMS) / minMS);
    const secToEnvent = Math.floor((timeToEvent % minMS) / 1000);

    document.getElementById('date').innerHTML =  (`será lançado em: <br>${dayToEvent}d ${hourToEvent}h ${minToEnvent}m ${secToEnvent}s`)

    if(timeToEvent < 0){
        clearInterval(countdown);

         document.getElementById('date').innerHTML =  ('já está disponível!!! 😎🤪')
    }
}, 1000);