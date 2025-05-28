import { Row, Col } from "antd";
import SectionHeader from "../molecules/SectionHeader";
import ModulCard from "../organisms/ModulCard";

const modules = [
  {
    id: 1,
    title: "HTML Dasar",
    description:
      "Pelajari struktur dasar website dan elemen-elemen HTML fundamental",
    icon: "📄",
    progress: 0,
    lessons: 15,
    duration: "4 jam",
  },
  {
    id: 2,
    title: "CSS Styling",
    description:
      "Buat website yang menarik dengan styling CSS dan responsive design",
    icon: "🎨",
    progress: 0,
    lessons: 20,
    duration: "6 jam",
  },
  {
    id: 3,
    title: "JavaScript",
    description:
      "Tambahkan interaktivitas dan logika programming dengan JavaScript",
    icon: "⚡",
    progress: 0,
    lessons: 25,
    duration: "8 jam",
  },
  {
    id: 4,
    title: "Project Portfolio",
    description:
      "Buat portfolio website profesional untuk showcase kemampuan Anda",
    icon: "💼",
    progress: 0,
    lessons: 10,
    duration: "5 jam",
  },
];

const ModulSection = () => {
  return (
    <section id="modul" className="section-light" style={{ padding: "5rem 0" }}>
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Modul Pembelajaran"
          subtitle="Pelajari coding dengan kurikulum yang terstruktur, dimulai dari dasar hingga mampu membuat project profesional"
        />
        <Row gutter={[32, 32]}>
          {modules.map((modul, index) => (
            <Col key={modul.id} xs={24} sm={12} lg={6}>
              <ModulCard modul={modul} index={index} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ModulSection;
