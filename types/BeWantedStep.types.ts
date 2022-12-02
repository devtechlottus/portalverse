export type BeWantedConfig = {
  [key: string]: string;
}

type BeWantedStepComponentData = {
  data?: BeWantedConfig;
  classNames?: string;
  enrollment?: string;
  path?: string;
  onNext?: (enrollment: string) => void; 
}

export default BeWantedStepComponentData