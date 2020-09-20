import React from 'react';

function Job({ job }) {
  return (
    <div className={'job'}>
      <div>{job.title}</div>
      <div>{job.company}</div>
    </div>
  );
}

export default Job;
