import dateUtil from "@/lib/utils/dateUtil";
import Link from "next/link";
import { findScheduleById } from "../actions";
import { notFound } from "next/navigation";

interface Props {
  searchParams: Promise<{ id: string }>;
}

export default async function SchedulePage(props: Props) {
  const { id } = await props.searchParams;
  if (!id || typeof id !== "string") {
    throw new Error("id is invalid");
  }

  const scheduleId = parseInt(id, 10);
  const schedule = await findScheduleById(scheduleId);
  if (!schedule) {
    notFound();
  }

  return (
    <main className="w-full text-center p-4">
      <h1 className="text-xl">予定</h1>
      <div className="mt-4 flex justify-center">
        <div>
          <table>
            <tbody>
              <tr className="p-2 border border-blue-700">
                <th className="p-2 border-r border-blue-700 bg-blue-300">
                  日時
                </th>
                <td className="p-2 border-r border-blue-700">
                  {dateUtil.format(schedule.date)}
                </td>
              </tr>
              <tr className="p-2 border border-blue-700">
                <th className="p-2 border-r border-blue-700 bg-blue-300">
                  タイトル
                </th>
                <td className="p-2 border-r border-blue-700">
                  {schedule.title}
                </td>
              </tr>
              <tr className="p-2 border border-blue-700">
                <th className="p-2 border-r border-blue-700 bg-blue-300">
                  内容
                </th>
                <td className="p-2 border-r border-blue-700">
                  {schedule.description}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="mt-4 flex justify-center">
          <Link href="/schedule">戻る</Link>
        </div>
      </div>
    </main>
  );
}
