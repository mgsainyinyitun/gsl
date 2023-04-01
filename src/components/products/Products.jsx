import ServicesContainer from "../services/ServicesContainer";
import CCTV from "../../images/cctvservice.jpg";

function Products() {
    return (
        <div className="mt-10 flex flex-col items-center">
            <div className="md:w-4/6 m-5">
                <h1 className="uppercase text-5xl text-white border-b-4 border-lime-900 mt-10 pb-3">Products</h1>
                <ServicesContainer
                    image={CCTV}
                    title="Ea ut mollit deserunt aliquip officia minim ea cillum."
                    paragraph="Pariatur esse consequat voluptate ullamco occaecat consequat sint anim sunt anim quis ullamco. Eiusmod ipsum eiusmod non ad amet do consequat. Minim ullamco eu consequat proident consequat consectetur. Nisi ad aliquip culpa officia mollit est voluptate esse nulla Lorem anim quis magna deserunt.Aute culpa ullamco amet magna officia eiusmod eu ipsum cillum voluptate sint. Tempor laborum consequat aute eiusmod proident ullamco elit exercitation. Incididunt Lorem occaecat nisi consequat magna tempor excepteur reprehenderit. Eu aute id velit ut voluptate consequat."
                />
            </div>
        </div>
    )
}
export default Products;