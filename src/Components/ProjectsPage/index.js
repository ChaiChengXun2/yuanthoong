import React, { useEffect, useState } from 'react';
import "./projectspage.css";
import Title from "../Title";
import Project from '../Project';
import NavBar from "../NavBar";
import Footer from "../Footer";
import { FiFilter } from "react-icons/fi";
import FilterPage from './FilterPage';

const ProjectsPage = ({ ccx }) => {

  useEffect(() => {
    document.title = "Projects | Yuan Thoong SDN BHD";
  }, [])

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({"type": [], "status": [], "duration": []});
  const [projects, setProjects] = useState([]);

  const multiPropsFilter = (products, filters) => {
    const filterKeys = Object.keys(filters);
    return products.filter(product => {
      return filterKeys.every(key => {
        if (!filters[key].length) return true; 
        if (Array.isArray(product[key])) {
          return product[key].some(keyEle => filters[key].includes(keyEle))
        }
        return filters[key].includes(product[key])
      })
    })
  }

  useEffect(() => {
    const cards = document.querySelectorAll(".project");
    const keyUp = () => {
      setData({"type": [], "status": [], "duration": []})
      cards.forEach(card => {
        if (card.children[1].children[0].innerHTML.toLowerCase().includes(search.toLowerCase())) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      })
    }

    window.addEventListener("keyup", keyUp);

    return () => {window.removeEventListener("keyup", keyUp)}
  }, [search])

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [showModal])

  useEffect(() => {
    if (Object.values(data).every(piece => piece.length === 0)) {
      setProjects(ccx)
    } else {
      const filtered = multiPropsFilter(ccx, data)
      setProjects(filtered)
    }
  }, [data, ccx])

  return (
    <div className='all-projects content flex-center-center'>
      <NavBar />
      <Title title='All Projects' sub='All Our Experiences' />
      <FilterPage showModal={showModal} setShowModal={setShowModal} setData={setData}/>
      <section className='search-bar flex-start-center'>
        <div className='search flex-center-start'>
          <input placeholder='' className='default-text' autoComplete='off' type="text" value={search} onChange={e => setSearch(e.target.value)}></input>
          <label className='default-text'>Search Projects</label>
        </div>
        <div className='filter flex-center-center' onClick={() => {setShowModal(true)}}><FiFilter /></div>
      </section>
      <div className="gay-grid">
        {
          projects && 
          projects.map((project, i) => {
            return (
              <Project id={project.id - 1} imgSrc={project.banner_url} title={project.name}  type={project.type} status={project.status} key={i}/>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export default ProjectsPage