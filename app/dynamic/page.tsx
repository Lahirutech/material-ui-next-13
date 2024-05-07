import Image from "next/image";
import React from "react";
import myimage from "@/public/images/car5.jpg";

const SelectImage = (props: { imgName: string }) => {
  if (props.imgName == "car1") {
    return (
      <Image
        src={`http://localhost:3000/images/${props.imgName}.jpg`}
        alt=""
        width={400}
        height={200}
      />
    );
  } else {
    return (
      <Image
        src={require(`../../public/images/${props.imgName}.jpg`)}
        alt=""
        width={400}
        height={200}
      />
    );
  }
};

const page = () => {
  return (
    <div>
      <Image src={myimage} alt="" height={500} width={700} />
      <SelectImage imgName="car1" />
      <SelectImage imgName="car2" />
    </div>
  );
};

export default page;
