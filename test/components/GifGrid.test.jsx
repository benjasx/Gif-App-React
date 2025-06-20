const { render, screen, getAllByRole } = require("@testing-library/react");
import GifGrid from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Puebas en <GifGrid/>", () => {
  const category = "one Punch";
  test("debe de mostrar el loading inicialmente", () => {

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    })


    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargan las imagenes UseFetchGifs", () => {
    const gifs = [
        {
            id: 'asdas',
            title: 'Saitama',
            url: 'https://Saitama.com/saitama.jpg'
        },
        {
            id: 'asdda',
            title: 'Goku',
            url: 'https://Goku.com/Goku.jpg'
        }
    ]


    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
    })



    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2)
  });
});
