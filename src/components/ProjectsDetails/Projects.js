import React, { useState } from "react";
import {
  Cell,
  Grid,
  Tab,
  Tabs,
} from "react-mdl";
import ProjectDetailsCard from "./ProjectDetailsCard";

function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const toggleCategorys = () => {
    if (activeTab === 0) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* project 1 details */}
          <ProjectDetailsCard
            url={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png`}
            title={"React Project #1"}
            button1={"GitHub"}
            button2={"CodePen"}
            button3={"Demo"}
            discription={`react is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by 
            Facebook and a community of individual developers and companies.
              React can be used as a base in the development of single-page or
              mobile applications`}
          />
          {/* project 2 details */}
          <ProjectDetailsCard
            url={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png`}
            title={"React Project #2"}
            button1={"GitHub"}
            button2={"CodePen"}
            button3={"Demo"}
            discription={`react is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by 
           Facebook and a community of individual developers and companies.
             React can be used as a base in the development of single-page or
             mobile applications`}
          />
        </div>
      );
    } else if (activeTab === 1) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* project 1 details */}
          <ProjectDetailsCard
            url={`https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png`}
            title={"React Native Project #1"}
            button1={"GitHub"}
            button2={"CodePen"}
            button3={"Demo"}
            discription={`React Native is an open-source mobile application framework created by Facebook, 
            Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers 
            to use React's framework along with native platform capabilities.`}
          />
          {/* project 2 details */}
          <ProjectDetailsCard
            url={`https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png`}
            title={"React Native Project #2"}
            button1={"GitHub"}
            button2={"CodePen"}
            button3={"Demo"}
            discription={`React Native is an open-source mobile application framework created by Facebook, 
            Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers 
            to use React's framework along with native platform capabilities.`}
          />
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* project 1 details */}
          <ProjectDetailsCard
            url={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAABPlBMVEX///9BLx+BxWSOcU5PlUZ/xGFSmUmKbEZQlkZMkkRALR5AKBxDLCFBMB89IxqDyWY8IhR8w11jrVNaqU3y7+tUp0qFzmhtsVpAJxtfrFG6qZd0tWG9trP6+fk5Hg719POIaEHKv69qWVKPg35LSCpzpVV+vmFAIRvS6cjM58GHx2uBvG5ytF/EtqU1FQCkmpVLNCnW0tAsAACtmYKp15ZjgkVOUC7u9+tbbzyyn4mVeVh0qFZGOiTm4+GFeHKg04vC47Xy+fBtmE9WYTbg8NlGXS6SzXmIwHVojEo6FxbYz8Ohim7KxcKZjooxCgBwYFhVQjmupaFTPzZsXVaj04613KVWZTZqgVODs29EPyVRfz9OcjpZgUFnuVhKaTVGUy2KpG+fp36xq42itorBv6Kdl3p/dWFbTj3Jxa/q6ddtQqrcAAAQbklEQVR4nO2de1/ayBrHAwpoJpBQEVMuQUFBaeVSFRUNKlJbEQSs9Kx2W3d7PLt73v8bODPJTC5kEuieLvqR+f2xG5JMaL4+M89lJoHjmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmF6gzvahWq3WJhHchnvOnvrf9cx1tt/aOh3unlwUkfx+f0AX3EI7Lk5Odk9PNxlGp872N093L4r+aDQa8OvERoX2osMQ43Crtf/U/+Jno/T+5vCiGAhEadDoHAP+4u1pi5khx+1v3Rajk5KzMowGLoabs03wbPOkOLHVORFG/cVhK/3UN/FU2j+9iFKHuR9QNHC79dT38STaHxYp7EQxjiSKLvspNhi42Jq5Pny2VRzttIiQ6E9uND/uHRyc12rrpmrnnw/29prNo7xIgRiInmw+9f1MV60LGzxITvS/be59Xr8LRzTJAPCACG7J2l5wfFc7+LiRhw1EO8DhLEUyW0UbvLh41Pxc8yE+gOd97uIhSHjWcW2vmbcbYfRidvhtWUxPFPMbB3cQCvDANkoRnu6r7SX9FhsMXLSe+rampLMLg148frS3DiKA94VdzI0OMMzzkUL44WPeNMHo7lPf15R0GjUsb+McRLy6azjscRAaoe8gaVhgdDbMjxifGD86j0S8hjofv34e8TrugwD38nGMb/jUdzYVberGJ+YPIrInPF848q+kpytBhCN8U8Sj30yEf7s6vvjnyzFkfJHwh+T7CH1UtFpgU7e/wCxEf/t63xWPxtmVL1L75cOb+buxLhncxWfHebSw29gbY1bhQu3Dhw9vlu4L4zD7Lt+Keu996nubgraw43gA3vgi528QvuDSFzCO3+VH3HtnIHTe1ftu3iskQV5j/Y2OL7j0bZz9RT7rziM6A4MfHvo2vCMSufbmDeIH8UF+Y4Y/vpbX8Z0+9c3949ov6n53zxMfAEcmvmDwwZs17zsSZ8R3tAI4bPEiwoebxaQFX/DB2/5kPXQJnLz4yI8EzTUvIIWDJKIH+WF8i8ee/CJ7Or6XX3bRE14xf+zhDuT1fFLnR/AFFz3db+Rcx1d88fiGOr6kh+PlhaYD39I3rzARrOO898VXDfSUDeYc7jAKX1bejuILBmuyB75jvXAVffHTRrc6vg33zsiDFQ1f0o7v3qM4A3yzgu9E87zxprvjlX/9uvKWmJ+JL/je3XvwwC/ORuCH8X10xcffraysrFDwLbp7Gz6Snw18uFbqHjWHC7++WjF7rwUf9B6u+C5x3PzSK6YE34EbCh68evXKYn7BiczvciM+E/j2x+GLvP/qhi/4zdX5YnyBZ5O1pdNp/b+6vA7+yGXH4eP5xdc6PszPim/R52Z+zw1f4mpn5/DwcGdn52rnCm4n1lQTU0w/iI4iJdqZia87Dh+oQXqIHw1f8MHN/J4ZPvWqvhpCWp2r1+dW4fbqan2NUGrX8dHQXEg7Vl+b1ATH4Yt8wfiI87Dhc439nhk+LhNrX83NzYXWYrGYqm7vzIXgpytVP5iOxdp1eHAHHmon6vBQaHvC645zHYUFA99bJ76gi/OAnvfZuQ4VApuLkQ8JBGmubRyFnzGz2A48tNqmXIGisxPPwIU/fv3aan6j+FxC5+cYuMSs+DhurY4+q+SjiQ8OhZDs4WQXTXuGzWH54euSxo/gS9rx3Qt0fJHkswubR/BxKrK/K7LDgo/bhkeuJnQf3kmbfG/B99ZpfS6h33NM2kbxaZQMZFZ87VUL1zG61fFt0BcYgMUlA98KBZ+L7wU+8fnjS6NBro6tDOFbwwcQvp0Jr+pZsOKPgxif4XuDCzZ83wpUfN4Fq4z2b4Z+DscHaVV1/LHT8HDMHj9kVO3cTnXk5IyqqqORBrzkSHMHPoRpLoR9hBXfWmhudY2bTLhcekQtl4KH5SXIzxXfQvCeWujyKJdm1E63X+a4TqNSknpVdF+prFSSG1XrWdVyVr4uydkBGdtjaqrbz3LpVE8plSoDE0y6k6tcX0vZblXNxFIp3Lybla5LQm9gweXEl0a9N+HAl74KhXYmDfw8i/Wyjs8aOQcXrAouUrHjYr2/OIovncv2BUlJqQ2ppABB6le5TlYpSYIgVUx+sW5F6jV6N5IsZbW9mVz2BjZroGYSEIDUNTg3pH653AOyVOl/ykplrXmuImvNJdzcBR+HXCwGZeLLJObmDicc+YypIv86LQSJfNPxvTYGv+T8vA3fwh0V34HLVFF60IPUhEalX05BAxOg1ZT6uTK8X0HqEWcXy5b6HY0iEGQBbaW7fdgMZG+UXrdxA2GXOpieXGqgZim4D0gl7U+g9vXmak62/lEo+BKmi9U2txPbiUMYNk8aNEO18EwbdeFe4X7ZMD/se4M2fPP0KUvwEeNzTlSmUxVBqAzQPzr2SRZkfbMKUQoYSaahSHizrAhyX7vl2AA2kxpwjEurPQluaUaT6UmK3r0hKnmQUrV9CrlSVxGkT8YfxYlPi1BiBr45lNWtIn+yM2HUDLM2fT0FPe2w4sO919Z5593wbehrhG4pQ0g6C6SBvlkFglLGm5Kg4B45UOQsObknkzNgM5DVLxfrA9DXqKUk0MftKwJmXlakBvkq2Jx813h8ocN2u722vYNS31BiwsGPZG3UuBnhszgPC755LGrewR97JB0ZiC9lbubw7iyQe/rWDSBMoYMRBFm3n0xWlhv4nrqScKN1yq4CMGm1j6+argCFEONSsPf30t74jM6Lx760emVxKWN1gpf30bL/wqKJDw9+8xo6c/Cj4qvp4yk1bkmb+NIN2cDXkzGJaklQUuTkWBYIFXUUX1kS9DEtZ1ifCq+qWV9HEZSO0bwPm8dc8SFmDtcBv+pHsl6vFVYGPsIvmbTBg/hoy4U8V1hZ8eUkA19DwvhSJcv9w92C3BnFNyD44OAm60SQ9WmYBxCf6W5h75Wrrvh2zFTDio9T65NnvXh9n5+2SoPgs4R+9sBlnoYvXMDr+/y0RQZj8VnNRxv93fHBc0v6tTpA0ft+2YYvB72MO746PWzWuU6Yd7T0JVbiAWXZgIZv2Q2fNvbRrI9U+4q070tn5bHWZwxemu914EsRfGpfBn1tq6fo/0fWVzL6Phol3a1PhVlHPU3Dl5gcH1nbTCsaaK7D7nuDhtdwdR2kYBC4pX1fxs36sOuA+AzXqeEzx77eKD54sgxDn06q8Q7T0zqvEVQjfO5jnxWZHd/25PiI70hSJi5o+Obt+CiBi1zDS8NP/w4+VRHAjeX+5Sz2vICCj0tlBaBAB1ImYKqwuRH3aFd187xwhAsZdSmn9U0aO+OsV6QsWom8X9b5mWWDCfDh5WkuC4QyfYvnpeDj+jIJ4Tg09uuJmBs+OBZUyqmOUfbk0tDZCkZzOFC4xX1pFJ8Y7Q6twDIomzMv6S2cd9AKzuBhedT87PgWFp1JG88f4YX11Mwx1qcGLg2Z4INw5Cxuqt5IetaBmpn4ZANftWEZKDVBvyKT/K9akciVtGK9JRqJwfC4bn5E+IxQb+0HZju4mP40avzIiU+4s+FDoYsx9C0iLVDmKgGO+gJDauSuWvD1bHEfxoeyLpyUcTmFnIvwkU4JCWEDS8nQ41TVWMb8qkwWJjA57XPaTP84rj2nzQbhb65ehUJXFptFE0n1GDkztDpp1sGRyI9WNeD5xeVle+S8sGiwg6IUrMIF3HepUV+mmoPJfRb1toyK8tibAarVaZugXM3ogGG4kU2psWqjVNHpxTqwmSCUUalPTWVR+SCF7K9cgmmJULnpZ3u5QTXNGc17evMbQk/VZtogosQaTM22r0Kr9W2jHq+2E9rBq22UtkGw9UnLfUhbftfeK9+Pmt/ColVByjoXPE3k91MWNqd7pXelUun6WorBW39XUpTSO5hjVCW0t/TuWveZag4dqNwo16QKmLu+VqCur8vQDK/hUdQO/QmyCsQOJcuSAnKYXwOdUKmUSkYRsa1N4Gozvbqutk3Tq44crG9PXK9CapHHsigdUR/8LM5j3kpvnrJI0iiVUp8pSg1SSINBmquWB/qmysX0vakyud1qufHpU6Ns3GIq1y1DdXMdLtPVNsvdLoKVKStypSIAGfZno/7AVbs9W3OufZhIkIUEh4nttq0QjQ4m8CKDQ9v6g8l0ix8sovheYOJ7TcFHmSqKkEeK/s+lkZmJ5rrURmVQrXY6g4YgCbgO8wPNf4pwyTTedD4uVBjtvTZ8C/eO4RLc5UV6qfSfUEe4IcTUhpmgTVdnuu8VKc7DDF2w87CNfQvOqO+SOI5pzJCnLCEep5oJ2pQ1xL3Xmbhh37tkhH72vuso0/Agj6stU1hUH5OkT5ZRvi9lJ411f67IQ6l+58O68sNXW+Q8xu/iWY7pPIyaUkDWgu9Gybmf+4+KPFHedBRN+cKCtffa8C06aJORbzpPksP8VjZzjlSp8kMBx08UTtz84oOjbGXkvbr5WUe+L86Rj7jd6TzNVjEnmLhqX0p5nvxPCmcetEfywaILPmfUAmrkLRrTeZK3U4EBcy9VVdVUo9R/Gr+hCY9+/viBY9UFuKPjc458PL8xxZEPqSOVJKWkSDAfyT2N28Aa4vleStG+8MXMe4MmvnuH2yVBi98/tcfIY4NcAyo3eFJ46LFo0n1dghfd/Ex88w7O8jp+g9AMPAbtEJkyiu85vC/wGaHfhuE3nF03nMRelzpF9NJ1gs1PdD5qL78noUvTSNdG6ws88brPalXf9NQi3TfvCOfCBczv1W+45977RpflkoD5+Synn7JOSfelBc/3Or7fsfWNZsfhyDoJmGfkzWlO4dwDlV5Guy9yvxDfyvemS7pxTF6c5n/xz/C6iXhfGP1djuKD9vd1aeno+29ogsNRGOTBBhn4dmf2xc0weMb8RGf07Ct8W1r+5ft36DXCo7bHy4TejLx1zkXkRZKiWCuMJr889B+/fX/8973jJSS8saglML2A+VmKzLqJfspy08Ld798fv1NK0oTeTLy1yktnF8T+/OvONUPSfx4f/1Ac9Ixc7Tk9hPU02iev0RXzTvuT/nh8/JO3U+UttjejEZ9VLdHov7VR/wE0fHZ6EZPeTLsNok0SvogO/8v/+fiXDV8YgKZB7+W/8GsibRovEY8f2P0EfzyCTw5vGPRe/gurJtSW3+DXjNjeyRl+/KtvwRdZT5o9l9Ej2gqY/I4tDoQPP7ZN6+Mvz/PkFeEz8LK0H9CmaX/5mtmB+fBf/zXwAbBnvKE+esLoWWXyE/17BSPN4P/Yxvj4yLEx7LGe61DL+BkFMb6xbhigpGB6hc95k94u87mjapk/gRL3f5ZteS4fCTeNX0YIBIaMnlNnpPyn/ZjCuqWECiIHpukFZrfAN0ZDYwCEKdwewC4YFNZN04Mud8arBB7aurAYYPIgImsu46NomJ4/wFyuh1on5s8YQRdyLkfCB5Yf1GHD3jidFg0D9MfjG3sWeDBeYR13nGAEY/kdLQu8gH+XddzxOjsNmAZowmOmN6lat45fTQ0U2ag3ubbsP8IYCOzO6lz439PZqQkwEJi1n/D8CTob6r+higY91m//hvaHF9CJnMzer+/+LJ1tDdkPuDMxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExjdX/AIPOnMPstCCsAAAAAElFTkSuQmCC`}
            title={"MongoDB Project #1"}
            button1={"GitHub"}
            button2={"CodePen"}
            button3={"Demo"}
            discription={`MongoDB is a source-available cross-platform document-oriented database program. 
            Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. 
            MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.`}
          />
        </div>
      );
    }
  };

  return (
    <div className="category-tabs">
      <Tabs
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId)}
        ripple
      >
        <Tab>React</Tab>
        <Tab>React Native</Tab>
        <Tab>MongoDB</Tab>
      </Tabs>
      <Grid>
        <Cell col={12}>
          <div className="content">{toggleCategorys()}</div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Projects;
