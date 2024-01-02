import Directory from "../components/directory/Directory";

function Homepage() {
  return (
    <div className="flex flex-col items-center px-10 py-20">
      <Directory />
    </div>
  );
}

export default Homepage;

/*
function MenuItem({ item }) {
  const { title, size } = item;

  // const image = `bg-cover bg-[url("${imageUrl}")]`

  return (
    <div
      className={`min-w-[30%] h-[240px] flex-shrink-1 flex-grow-1 flex-auto flex items-center justify-center border first:mr-[7.5] last:mr-[7.5] bg-cover bg-[url("https://i.ibb.co/0jqHpnp/sneakers.png")]   bg-center ${
        size && "h-[380px]"
      } `}
    >
      <div className="h-[90px] px-16 py-6 flex flex-col items-center justify-center border">
        <h1 className="font-bold mb-[6px] text-[22px] text-gray-800">
          {title}
        </h1>
        <span className="font-light text-base">Shop</span>
      </div>
    </div>
  );
}

export default MenuItem;

*/
