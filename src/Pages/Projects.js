import styled from 'styled-components'
import { SectionTitle } from '../Components/Title'
import { FEATURED_PROJECT, TITLE, SUB_TITLE, PROJECTS } from '../Utils/Contents/Project'
import { XPadContContainer, YMarginContainer } from '../Components/Container'
import { LinkButton } from '../Components/Button'
import Leafwire from '../Assets/Images/Leafwire.png'
import Tag from '../Components/Tag'
import { Card, CardContent, CardDescription, CardFooter, CardImage, CardSubTitle, CardTitle, FeaturedCard } from '../Components/Card'
import { forwardRef } from 'react'

const ProjectSection = styled(YMarginContainer)``

const AllProjects = styled.div`
	width: 100%;
	margin: 1em auto 0 auto;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
	justify-content: center;
`

const Project = function ({ title, image, subTitle, description, techs, link1, link2 }) {
	return (
		<Card>
			<CardContent>
				<CardTitle>{title}</CardTitle>
				<CardImage src={image} alt={`screenshot of ${title}`} loading='lazy' />
				<CardDescription>{description}</CardDescription>
				<CardSubTitle>{subTitle}</CardSubTitle>
				{techs.map((tech, i) => (
					<Tag key={i} name={tech} />
				))}
			</CardContent>
			<CardFooter>
				<LinkButton href={link1.URL} target='_blank'>
					{link1.NAME}
				</LinkButton>
				<LinkButton href={link2.URL} target='_blank'>
					{link2.NAME}
				</LinkButton>
			</CardFooter>
		</Card>
	)
}

const ProjectScreen = forwardRef(({ lang }, ref) => {
	return (
		<ProjectSection ref={ref}>
			<XPadContContainer>
				<SectionTitle>{TITLE[lang]}</SectionTitle>
				<FeaturedCard>
					<CardContent>
						<CardTitle>{FEATURED_PROJECT.TITLE[lang]}</CardTitle>
						<CardImage src={Leafwire} alt={`screenshot of ${FEATURED_PROJECT.TITLE[lang]}`} />
						<CardDescription>{FEATURED_PROJECT.DESCRIPTION[lang]}</CardDescription>
						<CardSubTitle>{SUB_TITLE[lang]}</CardSubTitle>
						{FEATURED_PROJECT.TECHNOLOGIES.map((tech, i) => (
							<Tag key={i} name={tech} />
						))}
					</CardContent>
					<CardFooter isOneLink={true}>
						<LinkButton href={FEATURED_PROJECT.LINK} target='_blank'>
							Visit Website
						</LinkButton>
					</CardFooter>
				</FeaturedCard>
				<AllProjects>
					{PROJECTS.map((project, i) => (
						<Project
							key={i}
							title={project.TITLE}
							image={project.IMAGE}
							subTitle={SUB_TITLE[lang]}
							description={project.DESCRIPTION[lang]}
							techs={project.TECHNOLOGIES}
							link1={project.LINK}
							link2={project.LINK_2}
						/>
					))}
				</AllProjects>
			</XPadContContainer>
		</ProjectSection>
	)
})

export default ProjectScreen
