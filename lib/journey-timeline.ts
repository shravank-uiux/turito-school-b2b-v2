/** One teacher chapter, five connected workflow beats. All motion follows this clock. */
export const JOURNEY_DURATION = 45;
export const BEAT_STARTS = [0,9,18,27,35] as const;
export const clamp = (v:number,min=0,max=1)=>Math.max(min,Math.min(max,v));
export function journeyFrame(seconds:number,reduced=false){
 const t=clamp(Number.isFinite(seconds)?seconds:0,0,JOURNEY_DURATION);
 const beat=t<9?0:t<18?1:t<27?2:t<35?3:4;
 const elapsed=t-BEAT_STARTS[beat];
 return {t,beat,elapsed,detail:reduced?2:elapsed<3?0:elapsed<6?1:2,progress:t/JOURNEY_DURATION,reveal:reduced?1:clamp(elapsed/.65),localProgress:clamp(elapsed/([9,9,9,8,10][beat]))};
}
