import React from 'react'
import { Newspaper, BookOpen, CalendarDays, Mountain, Users, MessageSquare } from 'lucide-react'; // Icons from lucide-react
import '../index.css'

const handleClick = ()=>{
    alert("Functionality coming soon")
}

const iconMap = {
  book: BookOpen,
  mountain: Mountain,
  calendar: CalendarDays,
  news: Newspaper,
};

const CardTag = ({ tagFromDb }) => {
  return (
    <div className="feature-icon-wrapper">
    {Object.entries(iconMap).map(([tag, IconComponent]) =>
      tag === tagFromDb ? (
        <IconComponent key={tag} className="feature-icon" />
      ) : null
    )}
  </div>
  );
};
const FeatureCard = ({header, paragraph, tag}) => {
  return (
    <div className="feature-item" onClick={handleClick}>
        <CardTag tagFromDb={tag} />
        <h3 className="feature-title">{header}</h3>
        <p className="feature-description">
        {paragraph}
        </p>
    </div>
  )
}

export default FeatureCard