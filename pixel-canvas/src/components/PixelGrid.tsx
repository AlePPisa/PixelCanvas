interface Props {
  width: number;
  height: number;
}

const PixelGrid = ({ width, height }: Props) => {
  return (
    <div>
      {[...Array<number>(width * height)].map((_, i) => (
        <div className="busterCards" key={i}></div>
      ))}
    </div>
  );
};

export default PixelGrid;
