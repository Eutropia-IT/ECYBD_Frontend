import React from "react";

import { FaAngleRight } from "react-icons/fa6";
import picture from "../../assets/banner1.jpg";
import Image from "next/image";
import PageTop from "../shared/PageTop";
import TeamCard from "../about/TeamCard";

const Movements = () => {
  return (
    <>
      {/* header section */}
      <PageTop
        title={"Movements"}
        description={
          " Aperiam amet neque delectus facere odio molestias enim adipisci harum aut esse?"
        }
      />

      {/* content section */}
      <div className="container px-8 2xl:px-0 mx-auto grid gap-10 grid-cols-12 pb-12">
        <div className=" text-gray-70  mt-10 text-justify col-span-12 xl:col-span-9">
          {/* section */}
          <div>
            <h1 className="text-2xl font-semibold ">
              Bangladesh Catholic Students Movement (BCSM)
            </h1>

            <p className="mt-3 text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              dolores modi veniam incidunt aut animi soluta omnis voluptatum
              dolor aspernatur reprehenderit dicta ipsa, dolorum esse
              consequuntur quos eaque nihil, amet odio voluptatibus fuga
              dignissimos nostrum labore itaque. Nulla laudantium necessitatibus
              officia perferendis fugit. Quod sit perferendis, natus
              reprehenderit totam cum alias fuga voluptatibus, iure porro enim
              hic sapiente modi provident fugit. Porro ea enim aliquid similique
              sit, error, optio quasi laborum cupiditate autem debitis culpa!
              Quasi, maxime dolor perspiciatis fugit totam voluptas beatae
              architecto nostrum pariatur iusto quod voluptatum sunt neque,
              aperiam accusantium doloremque quo. Distinctio expedita iusto
              repudiandae quisquam.
            </p>
          </div>

          {/* section */}
          <div>
            <h1 className="text-2xl font-semibold mt-5 ">
              Young Christian Students (YCS) & Young Students Movement (YSM)
            </h1>

            <p className="mt-3 text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              quod adipisci, tempora expedita id mollitia error corporis ad
              consequatur omnis. Maxime corporis sint debitis magni dolores
              minus sit temporibus dolor rem odit, perferendis quaerat! Libero
              fugit minus culpa exercitationem, delectus doloremque rerum,
              deserunt voluptas quae accusantium qui officiis deleniti, debitis
              inventore nihil! Numquam, molestiae dolores ducimus similique
              explicabo quas maiores reprehenderit consectetur optio atque nulla
              ab excepturi aliquam illo? Reiciendis sint praesentium mollitia at
              dolorem! Eligendi rerum totam asperiores suscipit quod! Ex
              aspernatur incidunt ut exercitationem, minima repellat
              repudiandae. Accusamus excepturi magnam, blanditiis rem, in modi,
              voluptatibus illum recusandae impedit temporibus earum
              consectetur? Magni dolorum facere voluptatum iste necessitatibus
              ullam saepe quisquam reprehenderit aliquid voluptatibus assumenda
              nisi, aut harum maxime, veniam voluptates est qui quia natus
              numquam distinctio eum consectetur?
            </p>
          </div>
        </div>

        <div className=" lg:mt-10 col-span-12 lg:col-span-3">
          <div className=" py-5 w-full bg-teal-50 rounded-lg px-6">
            <h1 className="text-center  text-xl font-bold text-gray-700">
              Jesus Youth
            </h1>

            {/* <div className="mt-5">
              <iframe
                width="auto"
                height="auto"
                src="https://www.youtube.com/embed/-ph4mykFp9I?si=2W8i5Gaoj4rcaA2I"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div> */}

            <div className="mt-5">
              <Image src={picture} alt="top image" className="w-full" />
            </div>

            <div className="mt-5">
              <div className="flex gap-2 mt-3">
                <div className="grid place-items-center text-gray-600">
                  <FaAngleRight />
                </div>
                <div>
                  <a href="#" className="text-gray-700 text-sm">
                    Heavens and the Earth
                  </a>
                  <p className="text-gray-700 text-sm">24:15 mins</p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <div className="grid place-items-center text-gray-600">
                  <FaAngleRight />
                </div>
                <div>
                  <a href="#" className="text-gray-700 text-sm">
                    Heavens and the Earth
                  </a>
                  <p className="text-gray-700 text-sm">24:15 mins</p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <div className="grid place-items-center text-gray-600">
                  <FaAngleRight />
                </div>
                <div>
                  <a href="#" className="text-gray-700 text-sm">
                    Heavens and the Earth
                  </a>
                  <p className="text-gray-700 text-sm">24:15 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movements;
