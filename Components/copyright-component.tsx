export default function Copytext() {
  //copyright date
  const now = new Date();
  let year = now.getFullYear();
  return (
    <div>
      <h1 className="text-alt-100 select-none">
        <span className="">© {year} RholexGHStudios</span>
        <span>. All Rights Reserved.</span>
      </h1>
    </div>
  );
}
