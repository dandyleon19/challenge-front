import React from "react";

interface TitlePageProps {
  title: string
}

const TitlePage = (props: TitlePageProps): React.ReactElement => {
  const { title } = props
  return <h1 className="title-page__title">{title}</h1>
}

export default TitlePage
