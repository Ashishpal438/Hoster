import PropertyCard from "@/components/PropertyCard";
import properties from "@/properties.json";

const PropertiesPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:contianer m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>NO Properties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => {
              return <PropertyCard property={property} key={property.id} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
