import {environment} from '../environments/environment';

export class AppConstants {
  public static AVATAR_USER = 'avatar_user';
  public static AVATAR_FILE = 'avatar_file';
  public static MUSIC = 'music';
  public static urlImg = `${environment.unauUrl}/imgs/`;
  // public static urlMusic = `${environment.unauUrl}/stream/`;
  public static urlMusic = `${environment.unauUrl}/get/`;
  public static TYPE_UPLOAD = {
    IMAGE: 'uploadImg',
    MUSIC: 'uploadFileMusic',
  };
}
