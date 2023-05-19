type WorkingHoursRange = { end: string; start: string; type: 'OPEN' }

export type WorkingHours = {
  monday?: Array<WorkingHoursRange>
  tuesday?: Array<WorkingHoursRange>
  wednesday?: Array<WorkingHoursRange>
  thursday?: Array<WorkingHoursRange>
  friday?: Array<WorkingHoursRange>
  saturday?: Array<WorkingHoursRange>
  sunday?: Array<WorkingHoursRange>
}
