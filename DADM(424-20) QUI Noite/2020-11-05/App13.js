import React from 'react';
import { Text, ScrollView, Image } from 'react-native';

const LogoJS = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Javascript-736400_960_720.png',
  width: 200,
  height: 200
}

const LinguagemApp = () => {
  return(
    <ScrollView>
      <Text style={{ marginTop: 20, fontSize: 32, fontWeight: 'bold' }}>
        Aprenda JavaScript
      </Text>

      <Text style={{ fontSize: 14, marginTop: 10, lineHeight: 17 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tortor sit amet velit posuere euismod vel vel urna. Aliquam dictum quis tellus quis rutrum. Maecenas lobortis hendrerit tempus. Praesent finibus at tortor non condimentum. Cras iaculis, ipsum at tristique pulvinar, lectus tellus vestibulum ipsum, in tincidunt mauris arcu eu dui. Fusce dictum augue non mauris sollicitudin consectetur. Integer suscipit rutrum augue, vitae placerat sapien lobortis quis. Etiam at purus eget ante auctor faucibus. Aliquam congue nisi pellentesque erat pharetra congue. Sed varius mollis elit, vitae condimentum justo convallis sed. Pellentesque sed velit lacinia, tempus tellus ut, iaculis mi. Cras velit dolor, porttitor sit amet congue sit amet, rhoncus ut mi.
      </Text>

      <Image source={ LogoJS } style={{ marginTop: 10 }} />

      <Text style={{ fontSize: 14, marginTop: 10, lineHeight: 17 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tortor sit amet velit posuere euismod vel vel urna. Aliquam dictum quis tellus quis rutrum. Maecenas lobortis hendrerit tempus. Praesent finibus at tortor non condimentum. Cras iaculis, ipsum at tristique pulvinar, lectus tellus vestibulum ipsum, in tincidunt mauris arcu eu dui. Fusce dictum augue non mauris sollicitudin consectetur. Integer suscipit rutrum augue, vitae placerat sapien lobortis quis. Etiam at purus eget ante auctor faucibus. Aliquam congue nisi pellentesque erat pharetra congue. Sed varius mollis elit, vitae condimentum justo convallis sed. Pellentesque sed velit lacinia, tempus tellus ut, iaculis mi. Cras velit dolor, porttitor sit amet congue sit amet, rhoncus ut mi.
      </Text>

      <Image source={ LogoJS } style={{ marginTop: 10 }} />

      <Text style={{ fontSize: 14, marginTop: 10, lineHeight: 17 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tortor sit amet velit posuere euismod vel vel urna. Aliquam dictum quis tellus quis rutrum. Maecenas lobortis hendrerit tempus. Praesent finibus at tortor non condimentum. Cras iaculis, ipsum at tristique pulvinar, lectus tellus vestibulum ipsum, in tincidunt mauris arcu eu dui. Fusce dictum augue non mauris sollicitudin consectetur. Integer suscipit rutrum augue, vitae placerat sapien lobortis quis. Etiam at purus eget ante auctor faucibus. Aliquam congue nisi pellentesque erat pharetra congue. Sed varius mollis elit, vitae condimentum justo convallis sed. Pellentesque sed velit lacinia, tempus tellus ut, iaculis mi. Cras velit dolor, porttitor sit amet congue sit amet, rhoncus ut mi.
      </Text>
    </ScrollView>
  );
}

export default LinguagemApp;