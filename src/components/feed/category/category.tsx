import CategoryItem from "./category-item";

const categories = [
  {
    title: "General",
    description: "News magazines are becoming obsolete, replaced by gadgets",
    img: "img/dummy/img1.jpg",
    isFeatured: true,
  },
  {
    title: "Business",
    description: "News magazines are becoming obsolete, replaced by gadgets",
    img: "img/dummy/img2.jpg",
  },
  {
    title: "Entertainment",
    description: "News magazines are becoming obsolete, replaced by gadgets",
    img: "img/dummy/img3.jpg",
  },
  {
    title: "Health",
    description: "News magazines are becoming obsolete, replaced by gadgets",
    img: "img/dummy/img4.jpg",
  },
  {
    title: "Science",
    description: "News magazines are becoming obsolete, replaced by gadgets",
    img: "img/dummy/img5.jpg",
  },
  {
    title: "Sports",
    description: "News magazines are becoming obsolete, replaced by gadgets",
    img: "img/dummy/img6.jpg",
  },
  {
    title: "Technology",
    description: "News magazines are becoming obsolete, replaced by gadgets",
    img: "img/dummy/img7.jpg",
  },
];

export default function Category() {
  return (
    <div className="bg-white py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <CategoryItem {...categories[0]} />

          <div className="flex-shrink max-w-full w-full lg:w-1/2">
            <div className="box-one flex flex-row flex-wrap">
              {categories.slice(3).map((category) => (
                <CategoryItem {...category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
