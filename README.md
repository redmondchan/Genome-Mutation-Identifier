# Genome Mutation Identifier
Website that helps users find mutations in DNA sequences.

This was a hackathon project from the Access Labs Hackathon 2019. We attempted to create the solution to a problem that a domain expert presented. I rebuilt this and added a way to detect insertion or deletion mutations.

Problem: How can you search for through a set of patient genomic data set to find a single mutation within that group of patients? This is a challenge pharmaceutical researchers are facing when developing new therapeutic targets.

Solution: A lot of early understanding of the molecular pathway requires finding a single point mutation in the genome(specifically for rare disease). If researchers could find this point mutation in a cohort of patients, they could identify a key or inhibitor of that gene and potentially cure that disease. Create an app that can ingest genomic data sets for rare disease patients and find the single point mutation within those cohorts of patients.

Here is the repo for the hackathon project: https://github.com/ParmeJon/genome-sequence-identifier

## Features
* Ability to upload a CSV file of patient data
* Search for a specific sequence within the data
* Identify insertion or deletion mutations based on an inputted DNA sequence

## Setup
Clone this repo.
Go to the root directory of genome-mutation-identifier and run ```npm install``` to install dependencies.

## Usage
After installing dependencies, go to to the root directory and run ```npm start``` to start the application.

## Demo
A demo of this project has been deployed on Heroku. [Demo](https://genome-mutation-identifier.herokuapp.com/)
