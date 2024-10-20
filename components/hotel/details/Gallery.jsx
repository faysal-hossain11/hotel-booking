import Image from "next/image";

const Gallery = ( {gallery} ) => {

  // console.log("gallery here", gallery);


  const newGallery = [...gallery];
  newGallery.shift();
  
  // const newGallery = Array.isArray(gallery) ? [...gallery] : [];



  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          src={gallery[0]}
          className="h-[400px] w-full"
          alt="Main Pic"
          width={400}
          height={400} />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {
            newGallery.map((image) => (
              <Image
                key={image}
                src={image}
                className="h-full"
                alt="Sub Pics"
                width={400}
                height={400} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;

