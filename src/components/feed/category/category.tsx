import { Categories } from "./categories";
import CategoryItem from "./category-item";

export default function Category() {
  return (
    <div className="bg-white py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <CategoryItem {...Categories[0]} />

          <div className="flex-shrink max-w-full w-full lg:w-1/2">
            <div className="box-one flex flex-row flex-wrap">
              {Categories.slice(1).map((category) => (
                <CategoryItem {...category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
