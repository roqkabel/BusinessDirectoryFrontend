import ImagesComponent from "@/components/ImagesComponent";
import NavigationMenu from "@/components/NavigationMenu";
import {
  AiFillSafetyCertificate,
  AiOutlineCheck,
  AiOutlineExclamationCircle,
  AiOutlineStar,
} from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  FaBookOpen,
  FaParking,
  FaTransgenderAlt,
  FaAddressCard,
} from "react-icons/fa";
import { RiBikeLine } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GOOGLE_MAP_API_KEY } from "@/constants/global";
import axios from "axios";
import Map from "@/components/Map";
import { Marker } from "@react-google-maps/api";
import { FiPhoneCall } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import Reviews from "./components/Reviews";
import DetailsSidebar from "./components/DetailsSidebar";
import CommentComponent from "./components/Comment";

const Company = () => {
  const [companyDetails, setCompanyDetails] = useState(null);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const router = useRouter();

  const placeId = router.query.id;

  const getDetails = async (url) => {
    try {
      const res = await axios.get(url);
      return setCompanyDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.googleApisKey}`
    );
  }, [placeId]);

  //    Marker
  const MarkerContent = () => {
    const position = {
      lat: companyDetails?.result?.geometry.location.lat,
      lng: companyDetails?.result?.geometry.location.lng,
    };

    return (
      <>
        <Marker
          position={position}
          animation={google.maps.Animation.BOUNCE}
          icon={{
            url: "https://img.icons8.com/glyph-neue/64/000000/marker.png",
            scaledSize: new window.google.maps.Size(80, 80),
          }}
        />
      </>
    );
  };

  return (
    <div>
      <NavigationMenu directory />
      <main className="company">
        <section className="map-section">
          <Map>
            <MarkerContent />
          </Map>
        </section>
        <section className="details container">
          <div className="info-container">
            <h1>{companyDetails?.result?.name}</h1>
            <div className="d-flex align-items-center">
              <p>
                <span>
                  {companyDetails?.result?.rating
                    ? companyDetails?.result?.rating
                    : "0"}
                </span>{" "}
                Rating
              </p>
              <h5 className="ml-3">
                <AiOutlineExclamationCircle /> User Ratings Total:{" "}
                {companyDetails?.result?.user_ratings_total
                  ? companyDetails?.result?.user_ratings_total
                  : "0"}
              </h5>
              <p className="ml-3">
                <AiFillSafetyCertificate /> Category:{" "}
                {companyDetails?.result?.types.toString()}
              </p>
            </div>
            <div className=" mt-2">
              <h5>
                <FaAddressCard style={{ fontSize: 20 }} /> Address:{" "}
                {companyDetails?.result?.formatted_address}
              </h5>
              {/* <h5 className="ml-3">
                <FaMapMarkerAlt /> Vicinity: {companyDetails?.result?.vicinity}
              </h5> */}
            </div>
            <div>
              <h5 className="mt-1">
                <FiPhoneCall /> Phone #:{" "}
                {companyDetails?.result?.formatted_phone_number}
              </h5>
              <h5 className="mt-1">
                <BiPhoneCall />
                Int. Phone #:{" "}
                {companyDetails?.result?.international_phone_number}
              </h5>
            </div>
            <div>
              {/* <ReactStars
                count={5}
                // onChange={ratingChanged}
                value={companyDetails?.result?.rating}
                size={30}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                edit={false}
              /> */}
            </div>
            <div className="mt-3">
              {companyDetails?.result?.opening_hours.open_now && (
                <span id="open_now">Open Now</span>
              )}
              {companyDetails?.result?.opening_hours.open_now == false ? (
                <span id="close_now">Closed</span>
              ) : (
                ""
              )}
            </div>
            <div className="tabs-content mt-5">
              <Tabs>
                <TabList>
                  <Tab>
                    <FaBookOpen style={{ fontSize: 20, marginRight: 5 }} />{" "}
                    Information
                  </Tab>
                  {/* <Tab>
                    <MdPhotoCamera style={{ fontSize: 20 }} /> Photos
                  </Tab>
                  <Tab>
                    <FaUsersCog style={{ fontSize: 20 }} /> Services
                  </Tab> */}
                  <Tab>
                    <AiOutlineStar style={{ fontSize: 20 }} /> Write a Review
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="mt-4 description">
                    <div>
                      <h2>About the Business</h2>
                      <h5>
                        <strong>N/A</strong>
                      </h5>
                      {/* <p className="mt-1">Established in 1989.</p>
                      <article>
                        The University of San Francisco Department of
                        Recreational Sports is proud to present the Koret health
                        and Recreation Center. This state of the art facility
                        was developed by the University of San Francisco in
                        collaboration with alumni, special donors and the Koret
                        Foundation. Since its opening in 1989, the Koret Center
                        has provided an outstanding recreational and fitness
                        environment for USF students, faculty, staff, alumni and
                        members.
                      </article> */}
                    </div>
                    <hr />
                    <div>
                      <h2>Amenities and More</h2>
                      <div className="amenities">
                        <div className="amenities-content">
                          <AiOutlineCheck
                            style={{ fontSize: 20 }}
                            className="mr-2"
                          />
                          <span>Good For Kids</span>
                        </div>
                        <div className="amenities-content">
                          <FaParking
                            style={{ fontSize: 20 }}
                            className="mr-2"
                          />
                          <span>Street Parking, Private Lot Parking</span>
                        </div>
                        <div className="amenities-content">
                          <RiBikeLine
                            style={{ fontSize: 20 }}
                            className="mr-2"
                          />
                          <span>Bike Parking</span>
                        </div>
                        <div className="amenities-content">
                          <FaTransgenderAlt
                            style={{ fontSize: 20 }}
                            className="mr-2"
                          />
                          <span>Gender-neutral restrooms</span>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h2>Working Hours</h2>
                      {
                        //   console.log(companyDetails?.result?.opening_hours.periods)
                        companyDetails?.result?.opening_hours.weekday_text.map(
                          (item) => (
                            <li>{item}</li>
                          )
                        )
                      }
                    </div>

                    <hr />
                    <div>
                      <h2>Recommended Reviews</h2>
                      <div>
                        {companyDetails?.result?.reviews ? (
                          <Reviews data={companyDetails} />
                        ) : (
                          <h5>No Reviews</h5>
                        )}
                      </div>

                      {/* <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={30}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      /> */}
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div>
                    <CommentComponent />
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div className="mini-sidebar">
            <DetailsSidebar data={companyDetails} />
          </div>
        </section>
      </main>

      <style jsx>{`
        #close_now,
        #open_now {
          color: #fff;
          padding: 10px;
          border-radius: 5px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        #open_now {
          background: #33ca7f;
        }

        #close_now {
          background: #ec4067;
        }
      `}</style>
    </div>
  );
};

export default Company;
