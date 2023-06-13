import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CompanyCard from "../components/CompanyCard";
import { SET_COLLECTIONS } from "../../../../redux-store/sellerStore.slice";
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
import AppWriteDB from "../../../../../appwrite-services/database.service";
import {
  COLLECTIONS_ID,
  ECOMM_DB_ID,
} from "../../../../../appwrite-services/appWriteSecrets";

const CompanyGrid = () => {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.adminStore.collections);
  const db = new AppWriteDB();

  useEffect(() => {
    async function fetchCollections() {
      const collections = await db.getAllDocs(ECOMM_DB_ID, COLLECTIONS_ID);
      dispatch(SET_COLLECTIONS(collections));
      return;
    }
    fetchCollections();
    return fetchCollections;
  }, []);

  if (collections.length === 0)
    return (
      <span className="h-full w-[50%] flex flex-wrap bg-pink-50 dark:bg-[rgb(27,27,39)] border dark:border-gray-800 border-pink-200 rounded-md gap-5 items-center justify-evenly p-5 dark:text-white font-bold text-3xl overflow-hidden">
        <HourglassEmptyRoundedIcon className="text-gray-400/30 text-[200px] animate-ping scale-200" />
      </span>
    );

  return (
    <div className="rounded-md h-full bg-pink-50 dark:bg-[rgb(27,27,39)] w-[50%] border dark:border-gray-800 border-pink-200">
      <div className="h-full overflow-auto w-full flex flex-wrap gap-5 justify-center py-5 ">
        {collections?.map((collection) => (
          <CompanyCard key={collection.$id} {...collection} />
        ))}
      </div>
    </div>
  );
};

export default CompanyGrid;
