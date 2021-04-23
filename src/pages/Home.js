import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EmptyCard from "../components/EmptyCard";
import SideBar from "../components/SideBar";
import loading from "../images/loading.gif";

export default function Home() {
  return (
    <div className="h-screen mx-auto">
      <div>
        <NavBar />
      </div>
      <div className="flex ">
        <div className="hidden lg:flex border-r h-full overflow-y-scroll top-0 no-scrollbar">
          <SideBar />
        </div>
        <div className="w-full">
          <div className="text-indigo-900 container mx-auto flex flex-col lg:items-center">
            {/* WELCOME TEXT */}

            <div className="mb-10 p-10 lg:hidden">
              <h1 className="text-3xl font-bold mb-2">Welcome , Mwelwa!</h1>
              <p className="text-lg opacity-80">
                see what your friends are doing
              </p>
            </div>
            <div className="flex lg:hidden">
              <Footer />
            </div>

            {/* CARDS */}
            <main
              className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 no-scrollbar smooth-scroll lg:ml-10 "
              style={{ scrollSnapType: "x" }}
            >
              <EmptyCard src="https://media-exp1.licdn.com/dms/image/C4D03AQFAKUjQ8zIsFA/profile-displayphoto-shrink_200_200/0/1611671601557?e=1622073600&v=beta&t=XZWn5RALkSWOjbCVROOa7OobGY4ouLjPnYs1gy5NTZ4" />

              {/* LOAADER URL : data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAbFBMVEX////Q0NDMzMzp6enR0dGcnJwAAACgoKD29vbx8fHKysr7+/vs7Ozb29u2trbv7+/Y2Njh4eFubm5EREQ1NTVpaWktLS1lZWW/v79zc3N6enpOTk48PDytra2SkpKHh4dcXFxKSkogICANDQ0sfVPvAAADF0lEQVR4nO3ZiXLaMBCAYdsSxQIMFmBMIJDr/d+xK1kYpjidhGnHUvt/CTlIMqNltasjWQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf5fa79XYY/gjlpPJshx7EH/AYjqZTBbhGzMfdSyPsJXtBq0kkGmYW6fzKbXcLIq8sP4rdc3Isl0/zcYc1QMkkDz3r/41I3bdrJ/2447r+/QlJbYP5Nw07WHx+z+Lj3IpcaMOU2ue5U3btMuxx/V9tURSZzdT66Vtmpf0ula2kkAKdQ1kL3Gs9dij+gZzabBWqkSXl0DUoV23k/AjXazGGt6X2UrbLhQlccxsGQKZttKzQkM+bI5nE/uCot2MCgOWctflXJWlzRaSkObkn51sdtvnYz3qKL/A1XhR+H4lQdm+uNW0Obj5dDrudtvt82v0+0jjUuIeMndW5vYnusiyYr1zceyOKSzwtgtF27tWaw8bF8Vuc44+Hx3rA8nv6jnf7iSM7SH6+ugZVykDm5GphPGa1m5LOtbAs+a4mZossdXdDj25vC+cVJmV8cq4F0Q5F1adwYRk5m0TvK3ziEOp/GooeyzZnQzOocX7j17Ma2LtIpi5OPJPWuzzJYyPjzcbb0oqWQtnwWBGzEefkPdzvHEIV8Yr496Gu+yyV/wz/SsR9WDbcs1s3r2nkRBTz4a6q5FekNQ1ij+UDOxRfHuOuFn9wu/jh157E5rzIolQXBiFPCpzXwZGh1CG1/2oSHH4wbpjra5uq7qq5IOqu2x1RR8zt6iHyaPqm1kkierugJT/DV1GHodkRCZON3r/4ksIovR3waH8fSjRl8nK2nDEVTLJcpNlsonMZdPujr9hm6isiv5a64afQvJZu9st33o/2RJHzl4GrrtreeVvJMYe1QP6qVR3GfFTTSc0owLVVXrmA+luVNyJqxp1UA+QpS8vuqXdnVF8Itz/FdPaamW+Qi6HxD4Q348jPt8Oku1vEc5Wui8NWSHrlPquZ/o5dM2IJGpgA5aMOv/sJiIxql/RU5fUfgQAAAAAAAAAAAAAAAAAAAAAAAAAAAD43/wEfmYcGzg+iAIAAAAASUVORK5CYII= */}
              <Card src="https://picsum.photos/300/400" />
              <Card src="https://picsum.photos/300/400" />
              <Card src="https://picsum.photos/400/400" />
              <Card src="https://picsum.photos/600/400" />
              <Card src="https://picsum.photos/200/400" />
              <Card src="https://picsum.photos/250/400" />

              <img src={loading} alt="loader" className="select-none" />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
