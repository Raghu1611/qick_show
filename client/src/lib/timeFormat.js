

const timeFormat = (minutes)=>{

  const hours = Math.floor(minutes/60);
  const minutessReaminder = minutes%60;

  return `${hours}h ${minutessReaminder}m`
}
export default timeFormat;