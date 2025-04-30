export interface Burger {
	/** Unique identifier for the burger */
	id: number;
	/** Timestamp of when the burger entry was created */
	created_at: string;
	/** Name of the burger */
	name: string;
	/** Name of the respective restaurant */
	restaurant: string;
	/** Description of the burger @default null */
	description: string | null;
	/** Rank of the burger */
	rank: number;
	/** Web URL for the restaurant */
	url: string;
	/** City/State of the restaurant in plain text */
	location: string;
	/** Latitude of the restaurant's location */
	latitude: number;
	/** Longitude of the restaurant's location */
	longitude: number;
	/** Indicates if the restaurant is in Minnesota */
	minnesota: boolean;
	/** Indicates if the burger is no longer available */
	kitchen_floor: boolean;
}
