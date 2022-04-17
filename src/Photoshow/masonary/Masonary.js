import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function WovenImageList() {
  return (
      <div className='container'>
    <ImageList sx={{ width: "100%", height: "100%" }} variant="woven" cols={3} gap={4}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: 'https://lh3.googleusercontent.com/cmXBb7hmIH4xhCTFpg9Uz8MrG6wE-2YLdRIb7FhTEljl_TSkSqR_8O1_tDkuG6bdo_bgMRm195EDkJpHQShHKe0CGUwXJQuCg0qEQA=w1200-h600-l90-rw-e30',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://lh3.googleusercontent.com/PEquff41OlGZybs_Ij9wzFlJmBvokVfrlScFvGRRQ85uXMc77-ToLie4gHGsccDFxCoE3vUYknNHyAcPvKQPYcKQ3kKv7FvLZ5jH=w1200-h600-rw-e30',
    title: 'Sink',
  },
  {
    img: 'https://lh3.googleusercontent.com/eyiPOWmbbHeyevDyXc5p-IA9_nWr1KfEia1_ecmF-FjmoyuXyUMTUnp-LpDQYmlv8XRXfZWWuA39xbTLgMKsNwSRPIMBOm0wzgxL=w1200-h600-rw-e30',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Chairs',
  },
  {
    img: 'https://images.pexels.com/photos/6547837/pexels-photo-6547837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Laptop',
  },
  {
    img: 'https://lh3.googleusercontent.com/FZv9NDqoQZSehASPTy4OfGK2JlycX5bGed3sKIbZyG88QMd2GW7-PEu3lCs5_cTHyUTFu5UHMUwkvS3NM5eCeCmeTuh829VSILKD=w1200-h600-l90-rw-e30',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Blinds',
  },
];



// 





//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     author: '@bkristastucchio',
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     author: '@rollelflex_graphy726',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//   },
// ];
