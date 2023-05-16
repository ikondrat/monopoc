import mockedPlace from './mockedPlace.json';

type WorkingHours = Record<keyof typeof  mockedPlace.opening_hours.days, Array<string>>;

export default function serializeWorkingHours(working_hours: typeof mockedPlace.opening_hours): WorkingHours {
  const res: any = {};
  Object.entries(working_hours.days).forEach(([day, hours]) => {
    res[day] = hours.map(hour => `${hour.start}-${hour.end}`)
  });

  return res;
}
