import { gridItems } from "@/data/index";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="About" className="bg-white dark:bg-black  pb-10 pb-36">
      <BentoGrid className="w-full">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            subtitle={item.subtitle}
            linksIcon={item.linksIcon}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
