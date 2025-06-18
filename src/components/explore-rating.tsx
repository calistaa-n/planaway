import { Star } from "lucide-react";

const ratingData: {
  average: number;
  totalReviews: string;
  distribution: Record<number, number>;
} = {
  average: 5,
  totalReviews: "48RB",
  distribution: {
    5: 48,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  },
};

export default function ExpRating() {
  return (
    <div className="bg-[#faf8f4] rounded-xl p-6">
      <h2 className="text-lg font-bold mb-4">Ratings</h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
        {/* Average */}
        <div className="flex items-center gap-2 mb-4 sm:mb-0 sm:min-w-[120px]">
          <Star className="text-yellow-500 fill-yellow-500 w-6 h-6" />
          <span className="text-2xl font-bold">{ratingData.average}.0</span>
          <span className="text-gray-500 text-sm">/5.0</span>
        </div>

        {/* Bars */}
        <div className="flex flex-col gap-2 flex-1">
          {[5, 4, 3, 2, 1].map((star) => {
            const percent = (ratingData.distribution[star] / 48) * 100 || 0;
            return (
              <div key={star} className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1 w-8 min-w-[2rem]">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{star}</span>
                </div>
                <div className="flex-1 h-2 rounded-full bg-gray-200 relative overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      percent > 0 ? "bg-yellow-400" : "bg-transparent"
                    }`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <div className="text-gray-500 text-xs w-12 text-right">
                  ({ratingData.distribution[star] > 0 ? ratingData.totalReviews : 0})
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
