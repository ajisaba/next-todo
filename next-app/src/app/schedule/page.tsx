import dateUtil from "@/lib/utils/dateUtil";
import Link from "next/link";
import { getListSchedules } from "./actions";

export default async function SchedulePage() {
  const schedules = await getListSchedules();
  return (
    <main className="w-full text-center p-4">
      <h1 className="text-xl">予定</h1>
      <div className="mt-4 flex justify-center">
        <div>
          <table>
            <thead>
              <tr className="p-2 border border-blue-700 bg-blue-300">
                <th className="border-r border-blue-700 p-2">日時</th>
                <th className="border-r border-blue-700 p-2">タイトル</th>
                <th className="border-r border-blue-700 p-2">内容</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => {
                return (
                  <tr
                    className="p-2 border border-blue-700"
                    key={`${index}-${schedule.date.toISOString()}`}
                  >
                    <td className="border-r border-blue-700 p-2">
                      {dateUtil.format(schedule.date)}
                    </td>
                    <td className="border-r border-blue-700 p-2">
                      <Link
                        href={`/schedule/detail?id=${schedule.id}`}
                        className="underline"
                      >
                        {schedule.title}
                      </Link>
                    </td>
                    <td className="border-r border-blue-700 p-2">
                      {schedule.description}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="mt-4 flex justify-center">
          <Link href="/">戻る</Link>
        </div>
      </div>
    </main>
  );
}
