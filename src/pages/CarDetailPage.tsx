import { useParams } from "react-router-dom";

const CarDetailPage = () => {
  const params = useParams();

  //const { data, error, isFetching } = useCar(params.id);

  return <div>Fetching car {params.id} from backend...</div>;
};

export default CarDetailPage;
