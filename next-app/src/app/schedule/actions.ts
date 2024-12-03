const schedules = [
  {
    id: 1,
    date: new Date("2024-11-15 10:30"),
    title: "健康診断",
    description: "開始時間の10分前までに行くこと。",
  },
  {
    id: 2,
    date: new Date("2024-11-04 10:00"),
    title: "上野公園",
    description: "上野公園へ遊びにいく。",
  },
];

export async function getListSchedules() {
  return schedules;
}

export async function findScheduleById(id: number) {
  if (schedules[id - 1]) {
    return schedules[id - 1];
  }
  return undefined;
}
