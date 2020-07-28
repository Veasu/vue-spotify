import Vue, {PluginFunction, PluginObject} from "vue";
import SpotifyWebApi from 'spotify-web-api-node'

declare module "vue/types/vue" {
  interface Vue {
    spotify: SpotifyWebApi;
  }
  interface VueConstructor {
    spotify: SpotifyWebApi;
  }
}

export declare class VueSpotify {
  static install: PluginFunction<SpotifyWebApi>;
}

export default VueSpotify;
