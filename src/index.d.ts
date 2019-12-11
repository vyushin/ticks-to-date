declare module "ticks-to-date" {

  export default function ticksToDate<T = any>(ticks: T): T extends number ? Date : null;

}
