import React from "react";
import PageTop from "../shared/PageTop";

const Blog = ({ blogId }) => {
  console.log("blog ID= ", blogId);
  return (
    <>
      <PageTop
        title={"Perseverance of the Saints"}
        description={"on 17th June 2014 by Vincent John"}
      />

      <div className="block lg:grid grid-cols-12 container px-8 2xl:px-0 mx-auto gap-12 mt-8 pb-12">
        <div className="col-span-12  text-base text-gray-800 lg:col-span-9 text-justify">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            placeat mollitia eum velit natus nam sed, ipsam accusamus, culpa
            veritatis quia in dicta suscipit iusto voluptatibus corporis amet ad
            perspiciatis corrupti quaerat. Optio laborum quaerat, libero tempore
            ipsam adipisci fugit id, repudiandae modi quis veniam maiores? Amet,
            ullam vitae exercitationem non quod quo dolorum? Harum
            necessitatibus eligendi vero dolores, voluptatibus facilis
            doloremque aspernatur accusantium ducimus. Sint quibusdam molestiae
            aliquid adipisci molestias architecto ut nobis nesciunt error, unde
            dolor quas natus cumque, esse atque vero autem non tenetur enim a
            dolorum doloremque repudiandae sunt nulla! Maxime magni adipisci
            nisi consectetur saepe!
          </p>
          <p className="mt-3">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            corporis nisi impedit in? Voluptate quod pariatur cum? Architecto
            quis incidunt neque beatae sit labore qui vel odio delectus
            provident, sunt iure voluptates tempora excepturi porro itaque cum
            repellat, esse assumenda est. Cum deserunt, itaque architecto vitae
            esse iste tempora, perspiciatis dolorum commodi labore voluptate
            asperiores nihil maiores tempore. Eligendi ab adipisci in commodi
            doloribus reprehenderit molestias deleniti earum! Rem mollitia
            ducimus corporis maxime quas explicabo commodi similique iure,
            delectus omnis!
          </p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi
            eius nihil aut officia eaque eligendi esse quisquam cupiditate
            dolore ex nam, eveniet quia perferendis nobis eos quo dolorum animi
            pariatur, omnis modi repudiandae odit dolor? Voluptas numquam, quia
            accusantium earum, sequi odio tempore, veritatis perferendis
            officiis vitae possimus sed iure quasi cumque? Totam, quasi porro
            laborum earum saepe aut, fugit, unde quo sapiente veniam quae iste
            tempora! Rem totam similique asperiores ducimus exercitationem, qui
            eum laudantium porro dolor obcaecati temporibus eos deleniti fugit
            amet quaerat voluptatem. Modi architecto a sit nostrum vero ab
            temporibus libero natus in laudantium officiis rem assumenda, nulla
            voluptas! Sint, error totam nisi provident modi blanditiis id atque
            molestias rerum nesciunt nostrum expedita non vel?
          </p>
          <p className="mt-3">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            corporis nisi impedit in? Voluptate quod pariatur cum? Architecto
            quis incidunt neque beatae sit labore qui vel odio delectus
            provident, sunt iure voluptates tempora excepturi porro itaque cum
            repellat, esse assumenda est. Cum deserunt, itaque architecto vitae
            esse iste tempora, perspiciatis dolorum commodi labore voluptate
            asperiores nihil maiores tempore. Eligendi ab adipisci in commodi
            doloribus reprehenderit molestias deleniti earum! Rem mollitia
            ducimus corporis maxime quas explicabo commodi similique iure,
            delectus omnis!
          </p>
        </div>

        <div className="mt-6 lg:mt-0 col-span-12 lg:col-span-3">
          {/* about */}
          <div className="text-gray-700 rounded bg-teal-50  px-8 lg:px-4 2xl:px-8  py-8">
            <h1 className="text-gray-800 font-bold text-xl">About</h1>
            <p className="mt-3 text-justify text-sm">
              Etiam porta sem malesuada magna mollis euismod. Cras mattis
              consectetur purus sit amet fermentum. Aenean lacinia bibendum
              nulla sed consectetur.
            </p>
          </div>

          {/* blog archives */}
          <div className="text-gray-700 mt-5">
            <h1 className="text-xl font-bold text-gray-800 mb-3">
              Blog Archives
            </h1>
            <div>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <div
                    key={item}
                    className="mb-3 cursor-pointer hover:font-semibold duration-100"
                  >
                    <div className="flex justify-between mb-2">
                      <p className="text-sm">March 2014</p>{" "}
                      <span className="px-2 py-1 rounded-full bg-teal-100 font-bold text-xs">
                        23
                      </span>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
