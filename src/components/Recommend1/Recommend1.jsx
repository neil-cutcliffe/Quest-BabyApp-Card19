/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import Recomend1 from 'src/components/Recomend1/Recomend1';

const Recommend11 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const Title = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: theme.typography['Typography']['H6'].fontStyle,
  fontFamily: theme.typography['Typography']['H6'].fontFamily,
  fontWeight: theme.typography['Typography']['H6'].fontWeight,
  fontSize: theme.typography['Typography']['H6'].fontSize,
  letterSpacing: theme.typography['Typography']['H6'].letterSpacing,
  lineHeight: theme.typography['Typography']['H6'].lineHeight,
  textDecoration: theme.typography['Typography']['H6'].textDecoration,
  textTransform: theme.typography['Typography']['H6'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Thumbs = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `10px 0px 0px 0px`,
});

const Recomend11 = styled(Recomend1)(({ theme }) => ({
  flex: `1`,
  margin: `0px`,
}));

const Recomend12 = styled(Recomend1)(({ theme }) => ({
  flex: `1`,
  margin: `0px 0px 0px 20px`,
}));

const Recomend13 = styled(Recomend1)(({ theme }) => ({
  flex: `1`,
  margin: `0px 0px 0px 20px`,
}));

function Recommend1(props) {
  return (
    <Recommend11 className={props.className}>
      <Title>{`You might also like`}</Title>
      <Thumbs>
        <Recomend11 />
        <Recomend12 />
        <Recomend13 />
      </Thumbs>
    </Recommend11>
  );
}

export default Recommend1;