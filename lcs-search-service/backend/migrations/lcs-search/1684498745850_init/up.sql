SET check_function_bodies = false;
CREATE TABLE public.places (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    website text NOT NULL,
    phone_number text NOT NULL,
    name text NOT NULL,
    address text,
    working_hours json
);
COMMENT ON TABLE public.places IS 'Contains places';
ALTER TABLE ONLY public.places
    ADD CONSTRAINT places_pkey PRIMARY KEY (uuid, name);
ALTER TABLE ONLY public.places
    ADD CONSTRAINT places_uuid_key UNIQUE (uuid);
